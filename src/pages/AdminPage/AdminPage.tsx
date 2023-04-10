import BlogList from "../../Components/BlogList";

const AdminPage = () => {
  return (
    <>
      <h1 className="py-3">Admin Page</h1>
      <BlogList admin={true} />
    </>
  );
};

export default AdminPage;
