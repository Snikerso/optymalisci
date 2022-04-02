import {Head} from "../../atoms/Head"
import { Wrapper } from "./styles"

export const Card = ({title, description, children}) => {

    return(
        <Wrapper>
            <Head fontSize={"18"}>{title}</Head>
            <p>{description}</p>
            {children}
        </Wrapper>
    )
}