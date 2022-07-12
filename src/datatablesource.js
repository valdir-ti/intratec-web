export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg" style={{ display: 'flex', alignItems: 'center' }}>
            <img className="cellImg" src={params.row.img} alt="avatar" width={32} height={32} style={{ borderRadius: '50%', objectFit: 'cover', marginRight: 20 }}/>
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://picsum.photos/200/300?random=2",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://picsum.photos/200/300?random=3",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://picsum.photos/200/300?random=4",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://picsum.photos/200/300?random=5",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://picsum.photos/200/300?random=6",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://picsum.photos/200/300?random=7",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://picsum.photos/200/300?random=8",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://picsum.photos/200/300?random=9",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://picsum.photos/200/300?random=10",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
    {
      id: 11,
      username: "Roxie",
      img: "https://picsum.photos/200/300?random=11",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
    {
      id: 12,
      username: "Roxie",
      img: "https://picsum.photos/200/300?random=12",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
    {
      id: 13,
      username: "Roxie",
      img: "https://picsum.photos/200/300?random=13",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
    {
      id: 14,
      username: "Roxie",
      img: "https://picsum.photos/200/300?random=14",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
    {
      id: 15,
      username: "Roxie",
      img: "https://picsum.photos/200/300?random=15",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
    {
      id: 16,
      username: "Roxie",
      img: "https://picsum.photos/200/300?random=16",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
    {
      id: 17,
      username: "Roxie",
      img: "https://picsum.photos/200/300?random=17",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
    {
      id: 18,
      username: "Roxie",
      img: "https://picsum.photos/200/300?random=18",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ];