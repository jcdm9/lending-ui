import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  Table,
  Row,
  Col
} from "reactstrap";

class Payments extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Loan</th>
                        <th>Collection Date</th>
                        <th>Collected By</th>
                        <th>Document #</th>
                        <th>Amount</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2019-06-23</td>
                        <td>Employee 1</td>
                        <td>332019</td>
                        <td>10,000.00</td>
                        <td>
                          <button className="btn btn-secondary btn-sm m-1">Edit</button>
                          <button className="btn btn-danger btn-sm">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2019-06-23</td>
                        <td>Employee 1</td>
                        <td>-</td>
                        <td>5,000.00</td>
                        <td>
                          <button className="btn btn-secondary btn-sm m-1">Edit</button>
                          <button className="btn btn-danger btn-sm">Remove</button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <button className="btn btn-primary">Add Payment</button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Payments;
