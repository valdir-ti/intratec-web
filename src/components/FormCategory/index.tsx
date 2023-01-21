import { FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { db } from "../../firebase";
import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";

import Toaster from "../Toaster";
import FormField from "../Form/FormField";
import FormButton from "../Form/FormButton";
import Layout from "../../pages/Layout";
import FormCheckbox from "../Form/FormCheckbox";

import * as S from "./styles";
import { supabaseClient } from "../../supabase";
import FormSelect from "../Form/FormSelect";

interface LocationProps {
  id: string;
  title: string;
  parent_id: string;
  status: boolean;
}

interface Props {
  isEditing?: boolean;
}

const FormCategories = ({ isEditing }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationProps;
  const currentUser = JSON.parse(localStorage.getItem("user")!);

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);
  const [parentId, setParentId] = useState("");
  const [id, setId] = useState<string>(state?.id || "");
  const [categories, setCategories] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [toasterMessage, setToasterMessage] = useState<string>("");
  const [toasterSeverity, setToasterSeverity] = useState<string>("");

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (!title) {
      toasterStart("error", "O título da categoria é obrigatório (*)");
      setLoading(false);
      return;
    }

    try {
      const itemId = uuidv4();
      const { error } = await supabaseClient.from("categories").insert([
        {
          id: itemId,
          title: title,
          status: status,
          user_id: currentUser.uid,
          parent_id: parentId,
        },
      ]);

      if (!error) {
        toasterStart("success", "Categoria cadastrada com sucesso!");
        setTimeout(() => {
          navigate("/categories");
        }, 1500);
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  async function handleFormUpdate(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (!title) {
      toasterStart("error", "O título da categoria é obrigatório (*)");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabaseClient
        .from("categories")
        .update({
          title: title,
          status: status,
          user_id: currentUser.uid,
          parent_id: parentId,
          updated_at: new Date(),
        })
        .eq("id", id);

      if (!error) {
        toasterStart("success", "Categoria atualizada com sucesso!");
        setTimeout(() => {
          navigate("/categories");
        }, 1500);
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  function toasterStart(severity: string, message: string) {
    setToasterSeverity(severity);
    setToasterMessage(message);
    setOpen(true);
  }

  function handleClose(event?: React.SyntheticEvent | Event, reason?: string) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  useEffect(() => {
    if (state) {
      const { id, title, status, parent_id } = state;
      setId(id);
      setTitle(title);
      setStatus(status);
      setParentId(parent_id);
    }
  }, [state]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, status } = await supabaseClient
        .from("categories")
        .select("id, status, title, parent_id");
      if (status === 200 && data?.length) {
        setCategories(data);
      }
    };
    fetchCategories();
  }, [id]);

  const disabledButton =
    title === state?.title &&
    status === state?.status &&
    parentId === state?.parent_id;

  return (
    <Layout>
      <S.Form onSubmit={isEditing ? handleFormUpdate : handleFormSubmit}>
        <S.Title>{isEditing ? "Edit Category" : "Add New Category"}</S.Title>

        <FormField
          label="Title"
          obrigatory
          type="text"
          placeholder="Title"
          value={title}
          autoComplete="off"
          onChange={(e) => setTitle(e.target.value)}
        />

        {categories.length ? (
          <FormSelect
            label="Parent Category"
            data={categories}
            selected={parentId}
            onChange={(e) => setParentId(e.target.value)}
          />
        ) : (
          <></>
        )}

        <FormCheckbox
          label="isActive"
          checked={status}
          type="checkbox"
          onChange={() => setStatus(!status)}
        />

        <FormButton
          label={isEditing ? "Edit" : "Save"}
          loading={loading}
          disabled={disabledButton}
        />
      </S.Form>
      <Toaster
        open={open}
        title={toasterMessage}
        severity={toasterSeverity}
        onClose={handleClose}
      />
    </Layout>
  );
};

export default FormCategories;
