import axios from 'axios'
import { useEffect, useState } from 'react';
 
const Produtos = () => {
    const [pizzas,setPizzas] = useState(['Calabreza','Muçarela','baiana']);
   axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
   .then(response => setPizzas(response.data.data))
   .catch(error => console.long(error))

    // Mapeamento das pizzas da lista (iteração)
    const listaPizzas = pizzas.map(pizza =>
        <li key={pizza}>{pizza.nome}</li>);
    return(
    <>
        <h3>Listagem de Produtos</h3>
        <ul>
            {listaPizzas}
        </ul>
    </>
    )
}
export default Produtos