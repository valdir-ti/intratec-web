import { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import { db } from '../../firebase';
import { collection, getDocs, query, where } from "firebase/firestore";

import Chart from '../Chart'
import TableList from '../Table'
import Layout from '../../pages/Layout'

import { SidebarContext } from '../../context/sidebar/sidebarContext';

import useWindowDimensions from '../../hooks/getWindowDimensions';
import CustomizedProgressBars from '../CustomizedCirculrProgress';

import GenericAvatar from "../../assets/generic-avatar.png";

import * as S from './styles'

interface SingleProps {
  slug: string;
}

const Single = ({ slug }: SingleProps) => {

  const params = useParams();
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const getData = async () => {
      const dbRef = collection(db, slug);
      const q = query(dbRef, where("id", "==", params.id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc: any) => {
        setData(doc.data());
      });
    }
    getData()
  }, [params.id, slug])

  const sidebarContext = useContext(SidebarContext);
  const { state: { open } } = sidebarContext;

  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <Layout>
      <S.Container>
          <S.TopDetails open={open}>
            <S.TopFirstLine>
              <S.TopTitle>Information</S.TopTitle>
              <S.EditButton>
                <S.LinkStyled
                  to={`/${slug}/edit/${data.id}`}
                  state={{...data}}
                >
                  Edit
                </S.LinkStyled>
              </S.EditButton>
            </S.TopFirstLine>
            <S.TopSecondLine>
                {Object.keys(data).length === 0 ? <CustomizedProgressBars size={60} /> :
                  <>
                    <S.TopImage src={data?.img || GenericAvatar} />
                    <S.TopDetailsItems>
                      <S.TopDetailsTitle>{data.displayname}</S.TopDetailsTitle>
                      <S.TopDetailsItem><S.TopDetailsItemKey>Email:</S.TopDetailsItemKey>&nbsp;{data.email}</S.TopDetailsItem>
                      <S.TopDetailsItem><S.TopDetailsItemKey>Phone:</S.TopDetailsItemKey>&nbsp;{data.phone}</S.TopDetailsItem>
                      <S.TopDetailsItem><S.TopDetailsItemKey>Address:</S.TopDetailsItemKey>&nbsp;{data.address}</S.TopDetailsItem>
                      <S.TopDetailsItem><S.TopDetailsItemKey>Country:</S.TopDetailsItemKey>&nbsp;{data.country}</S.TopDetailsItem>
                    </S.TopDetailsItems>
                  </>
                }
            </S.TopSecondLine>
          </S.TopDetails>
          <S.TopChart open={open}>
            <Chart aspect={isMobile ? 1/1 : 3/1} title='Users Transactions (Last 6 months)'/>
          </S.TopChart>
          <S.Bottom open={open}>
            <S.BottomTable>
              <TableList title='Last Users Transactions'/>
            </S.BottomTable>
          </S.Bottom>
      </S.Container>
    </Layout>
  )
}

export default Single