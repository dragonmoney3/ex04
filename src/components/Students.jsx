import React, { useState } from 'react'
import { Row, Col, Table, Button } from 'react-bootstrap'

const Students = () => {
    const [students, setStudents] = useState([
        { no: 1, name: '홍길동', dept: '컴정과' },
        { no: 2, name: '흥부', dept: '기계과' },
        { no: 3, name: '놀부', dept: '체육과' },
    ]) //JSON Data

    const onDelete = (student) => {
        if (window.confirm(student.name + "학생을 지우겠습니까?")) {
            const newStudents = students.filter(s => s.no !== student.no);
            setStudents(newStudents);
        }
    }

    return (
        <div>
            <h1>학생관리</h1>
            <Row className='justify-content-center my-5'>
                <Col md={8} className='px-5'>
                    <Table striped bordered hover>
                        <thead className='text-center'>
                            <tr>
                                <td>학번</td>
                                <td>이름</td>
                                <td>학과</td>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(s =>
                                <tr key={s.no}>
                                    <td>{s.no}</td>
                                    <td>{s.name}</td>
                                    <td>{s.dept}</td>
                                    <td>
                                        <Button onClick={() => onDelete(s)} variant='danger'>
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

export default Students