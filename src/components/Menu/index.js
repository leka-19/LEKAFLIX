import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import  './Menu.css'
import {LogoImage, MenuWrapper} from '../../components/Menu/style.js'
import Button from '../../components/Button/index'



function Menu (){
    return (
        <MenuWrapper className="Menu">
         <Link to ="/">
             <LogoImage  src={Logo} alt="LekaFlix logo"/>
         </Link>
    
          
<Button as={Link} to = "/cadastro/video">
Novo video 
</Button>

</MenuWrapper>


);


}

export default Menu;