import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  Table,
  Row,
  Col
} from "reactstrap";

class Loans extends React.Component {
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
                        <th>Borrower</th>
                        <th>Principal</th>
                        <th>Balance</th>
                        <th>Disbursed</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>10,000.00</td>
                        <td>0.00</td>
                        <td>2019-05-23</td>
                        <td><span className="badge badge-pill badge-success">Closed</span></td>
                        <td>
                          <button className="btn btn-secondary btn-sm m-1">Edit</button>
                          <button className="btn btn-danger btn-sm">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Juan Carlos</td>
                        <td>9,500.00</td>
                        <td>5,000.00</td>
                        <td>2019-05-20</td>
                        <td><span className="badge badge-pill badge-primary">Active</span></td>
                        <td>
                          <button className="btn btn-secondary btn-sm m-1">Edit</button>
                          <button className="btn btn-danger btn-sm">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>John Doe</td>
                        <td>5,000.00</td>
                        <td>5,000.00</td>
                        <td>2019-06-24</td>
                        <td><span className="badge badge-pill badge-primary">Active</span></td>
                        <td>
                          <button className="btn btn-secondary btn-sm m-1">Edit</button>
                          <button className="btn btn-danger btn-sm">Remove</button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <button className="btn btn-primary">Add Loan</button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Loans;
