import GenericAvatar from "./assets/generic-avatar.png";

export const userColumns = [
  { field: "id", headerName: "User ID", width: 200 },
  {
    field: "username",
    headerName: "Username",
    width: 230,
    renderCell: (params) => {
      return (
        <div
          className="cellWithImg"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            className="cellImg"
            src={!params.row.img ? GenericAvatar : params.row.img}
            alt="avatar"
            width={32}
            height={32}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: 20,
            }}
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "displayname",
    headerName: "Name",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "isActive",
    headerName: "Active",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.isActive}`}>
          {params.row.isActive ? "Active" : "Inactive"}
        </div>
      );
    },
  },
  {
    field: "isAdmin",
    headerName: "Nível",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.isAdmin}`}>
          {params.row.isAdmin ? "Admin" : "User"}
        </div>
      );
    },
  },
];

export const productColumns = [
  { field: "id", headerName: "Product ID", width: 200 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
    renderCell: (params) => {
      return (
        <div
          className="cellWithImg"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            className="cellImg"
            src={!params.row.img ? GenericAvatar : params.row.img}
            alt="avatar"
            width={32}
            height={32}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: 20,
            }}
          />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "price",
    headerName: "Price",
    width: 120,
  },
  {
    field: "description",
    headerName: "Description",
    width: 230,
  },
  {
    field: "specifications",
    headerName: "Specifications",
    width: 230,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 80,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.isActive ? "Active" : "Inactive"}
        </div>
      );
    },
  },
];

export const companyColumns = [
  { field: "id", headerName: "Company ID", width: 200 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
    renderCell: (params) => {
      return (
        <div
          className="cellWithImg"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            className="cellImg"
            src={!params.row.img ? GenericAvatar : params.row.img}
            alt="avatar"
            width={32}
            height={32}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: 20,
            }}
          />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "price",
    headerName: "Price",
    width: 120,
  },
  {
    field: "description",
    headerName: "Description",
    width: 230,
  },
  {
    field: "specifications",
    headerName: "Specifications",
    width: 230,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 80,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.isActive ? "Active" : "Inactive"}
        </div>
      );
    },
  },
];
