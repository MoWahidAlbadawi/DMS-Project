import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";

const LayoutPage = () => {
    return <>
    <Navbar />
        <Container minHeight={'100vh'}>
        <Outlet />
        </Container>
    <Footer />
    </>
}
export default LayoutPage;