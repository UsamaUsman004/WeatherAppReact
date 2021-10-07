import './App.css';
import { Container,  Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch ,faCloud } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="bg-container">
      <Container fluid>
        <Row>
          <Col xs={8} md={8} sm={12} className="currentWeather">
            
              <div className="d-flex align-items-start flex-column" style={{height: '100vh'}}>
                  <div className="mb-auto p-5">
                    <h3>Weather App</h3>
                  </div>

                  <div className="px-5 pb-5">
                    <div className="d-flex flex-column flex-md-row">

                      <div className="me-5">
                        <p className="temp">08°</p>
                      </div>

                      <div className="me-5 align-self-center">
                        <h1>London</h1>
                        <p>06:09 Sunday,22 Sept'21</p>
                      </div>

                      <div className=" me-5 align-self-center">
                        <h1>
                        <FontAwesomeIcon icon={faCloud} />
                        </h1>
                        <p>Rainy</p>
                      </div>

                    </div>
                  </div>
            </div>
       
        </Col>





          <Col xs={4} md={4} sm={12}>
            
            
            
          <Row>


            <Col xs={12} md={12} sm={12} className="py-3 halfDiv">
              <div className="input-group mb-3 border">
                <input type="text" className="form-control border-0 rounded-0" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn searchbtn border-0 text-white" type="button" id="button-addon2">
                  <i className="fa fa-search" />
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </Col>

            <hr />


            <Col xs={12} md={12} sm={12} className="py-3 halfDiv">
              <h6 className="mb-3">Weather Details </h6>
              <table width="100%" className="table text-white">
                <tbody><tr>
                    <td>Humdity</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Humdity</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Humdity</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Humdity</td>
                    <td>30</td>
                  </tr>
                </tbody></table>
            </Col>

            <hr />


          </Row>
          
          
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}
export default App;