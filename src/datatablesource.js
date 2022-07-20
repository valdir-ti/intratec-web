import GenericAvatar from "./assets/generic-avatar.png";

export const userColumns = [
  { field: "id", headerName: "ID", width: 280 },
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
