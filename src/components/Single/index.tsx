import { useContext, useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';

import { db } from '../../firebase';
import { collection, getDocs, query, where } from "firebase/firestore";

import Chart from '../Chart'
import TableList from '../Table'
import Layout from '../../pages/Layout'

import { SidebarContext } from '../../context/sidebar/sidebarContext';

import useWindowDimensions from '../../hooks/getWindowDimensions';

import * as S from './styles'
import CustomizedProgressBars from '../CustomizedCirculrProgress';

const Single = () => {

  const params = useParams();
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const getData = async () => {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("id", "==", params.userId));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc: any) => {
        setData(doc.data());
      });
    }
    getData()
  }, [params.userId])


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
                <Link
                  to={`/users/edit/${data.id}`}
                  state={{...data}}
                >
                    Edit
                  </Link>
              </S.EditButton>
            </S.TopFirstLine>
            <S.TopSecondLine>
                {Object.keys(data).length === 0 ? <CustomizedProgressBars size={60} /> :
                  <>
                    <S.TopImage src={data.img} />
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