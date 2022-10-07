import { Container,Row, Col, Image, Button, Form} from "react-bootstrap"
import mercy from "../assets/ImagesPRJ/Mercedes Car EQC 300kW Edition - 900x598 1.png"
import listsosmed from "../assets/ImagesPRJ/list_sosmed.png"


const Pencarian = () => {
    return (
        <div className="ContainerAllSearch">
            <Container className="ContainerHeader">
                
                <Row >
                <Col className="DescIntro ">
                        <Col className=" ">
                            <h1 className="Title">  <b>Sewa & Rental Mobil Terbaik di Kawasan Madiun</b></h1>
                            <p className="">Slamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            
                        </Col>
                    </Col>
                    
                    
                    <Col className="mercyintro"> 
                        <Col className="Container-mercy">
                            <Image src={mercy} alt="mercy" className="mobilmercy" />
                        </Col>
                    </Col>
                </Row>
            </Container>

            <Container className="ContainerSearch">
                <Row className="RowSearch border">
                    <Col className="border">
                        <Form.Group >
                            <Form.Label htmlFor="disabledTextInput">Nama Mobil</Form.Label>
                            <Form.Control id="disabledTextInput" placeholder="Ketik Nama/tipe mobil" />
                        </Form.Group>
                    </Col>
                    <Col className="border">
                        <Form.Group >
                                <Form.Label>Kategori</Form.Label>
                                <Form.Select>
                                    <option> 2 -4 orang</option>
                                    <option> 4-6 orang</option>
                                    <option> 6-8 orang</option>
                                </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col className="border">
                        <Form.Group >
                                <Form.Label>Harga</Form.Label>
                                <Form.Select>
                                    <option> Rp.400.000 </option>
                                    <option> Rp. 400.000 - Rp. 600.000</option>
                                    <option> Rp.400.000</option>
                                </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col className="border">
                        <Form.Group >
                                <Form.Label htmlFor="disabledSelect">Status</Form.Label>
                                <Form.Select>
                                    <option> Tersedia</option>
                                    <option> Disewa</option>
                                </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                    <Button variant="success" href="#">Cari Mobil</Button>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
            <Row className="FooterSearch">
                    <Col>
                    <p><b>Jalan Suroyo No.161 Mayangan Kota Probolinggo 672000</b></p>
                    <p><b>binarcarrental@gmail.com</b></p>
                    <p><b>081-233-334-808</b></p>
                    </Col>

                    <Col>
                    <p>Our Services</p>
                    <p> Why Us</p>
                    <p> Testimonial</p>
                    <p>FAQ</p>
                    </Col>

                    <Col>
                    <p><b>Connect with us</b></p>
                    <Image src={listsosmed} alt="listsosmed"/>
                    </Col>

                    <Col className="cprt">
                    <p><b>Copyright Binar 2022</b></p>
                    <Col className="LogoBinar"></Col>
                    </Col>
                </Row>
            </Container>

            
        </div>
    )
}

export default Pencarian