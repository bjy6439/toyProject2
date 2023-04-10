import BlogList from "../../Components/BlogList";

const AdminPage = () => {
  return (
    <>
      <h1>Admin Page</h1>
      <BlogList admin={true} />
    </>
  );
};

export default AdminPage;
