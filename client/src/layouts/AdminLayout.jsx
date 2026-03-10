import AdminNavbar from "../admin/components/AdminNavbar";

export default function AdminLayout({ children }) {
    return (
        <>
            <AdminNavbar />
            <div className="p-6">
                {children}
            </div>
        </>
    );
}























