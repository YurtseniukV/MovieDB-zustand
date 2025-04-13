import {Link} from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.nav`
    background-color: #787878;
    padding: 10px 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
`;

const MenuItem = styled.li`
    margin: 0 15px;
`;

const MenuLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
        color: #007bff;
    }
`;

const MenuComponent = () => {
    return (
        <MenuContainer>
            <MenuList>
                <MenuItem>
                    <MenuLink to="/">Home Page</MenuLink>
                </MenuItem>
            </MenuList>
        </MenuContainer>
    );
};

export default MenuComponent;