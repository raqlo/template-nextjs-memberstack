import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

const AdminLayout = ({children}: Props) => {
    return (<div>{children}</div>)
}

export default AdminLayout;