import PropTypes from 'prop-types'
import css from "./Container.module.css";





export const Container = ({children}) =>{
    
    return(
        <Container className={css.container}>{children}</Container>
        
    ) 
    
    
};

Container.propTypes ={
    children: PropTypes.node.isRequired,
}




