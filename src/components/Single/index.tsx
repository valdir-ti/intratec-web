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

import { productFields, userFields } from '../../singlePageSource';

import GenericAvatar from "../../assets/generic-avatar.png";

import * as S from './styles'

const singleColumns: any = { users: userFields, products: productFields }

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
                      <S.TopDetailsTitle>{data[singleColumns[slug][0]]}</S.TopDetailsTitle>
                      {singleColumns[slug].map((item: string, i: number) => {
                        return (
                          <S.TopDetailsItem key={i}>
                            <S.TopDetailsItemKey>{item.toUpperCase()}:</S.TopDetailsItemKey>
                              &nbsp;<S.TopDetailsSpan>{data[item]}</S.TopDetailsSpan>
                          </S.TopDetailsItem>
                        )
                      })}
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