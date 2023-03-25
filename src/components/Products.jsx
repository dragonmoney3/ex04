import React, { useState } from 'react'
import { Row, Col, Table, Button } from 'react-bootstrap'

import Proinsert from './Proinsert';

const Products = () => {
    const [products, setProducts] = useState([
        { code: 1, name: 'LG 냉장고', price: 2500000 },
        { code: 2, name: 'LG TV', price: 3000000 },
        { code: 3, name: 'LG 세탁기', price: 2400000 },
    ]); // JSON Data

    const onDelete = (product) => {
        if (window.confirm(product.name + "학생을 지우겠습니까?")) {
            const newProducts = products.filter(p => p.code !== product.code);
            setProducts(newProducts);
        }
    }
    return (
        <div>
            <h1>상품관리</h1>
            <Row className='justify-content-center my-5'>
                <Col md={8} className='px-5'>
                    <Proinsert
                        setProducts={setProducts} products={products} />
                    <Table striped bordered hover >
                        <thead className='text-center'>
                            <tr>
                                <td>상품코드</td>
                                <td>상품이름</td>
                                <td>상품가격</td>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(p =>
                                <tr key={p.code}>
                                    <td>{p.code}</td>
                                    <td>{p.name}</td>
                                    <td>{p.price}</td>
                                    <td>
                                        <Button onClick={() => onDelete(p)} variant='danger'>
                                            삭제
                                        </Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}

export default Products 