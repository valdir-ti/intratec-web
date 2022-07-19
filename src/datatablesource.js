import CustomizedProgressBars from "./components/CustomizedCirculrProgress";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
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
          {!params.row.img ? (
            <CustomizedProgressBars size={16} />
            ) : (
            <img
              className="cellImg"
              src={params.row.img}
              alt="avatar"
              width={32}
              height={32}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: 20,
              }}
            />
          )}
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
