import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  Table,
  Row,
  Col
} from "reactstrap";

class Borrowers extends React.Component {
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
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Contact No.</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>Male</td>
                        <td>0932-2234-361</td>
                        <td><span className="badge badge-pill badge-success">ACTIVE</span></td>
                        <td>
                          <button className="btn btn-secondary btn-sm m-1">Edit</button>
                          <button className="btn btn-danger btn-sm">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Juan Carlos</td>
                        <td>Male</td>
                        <td>0932-2234-222</td>
                        <td><span className="badge badge-pill badge-warning">INACTIVE</span></td>
                        <td>
                          <button className="btn btn-secondary btn-sm m-1">Edit</button>
                          <button className="btn btn-danger btn-sm">Remove</button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <button className="btn btn-primary">Add Borrower</button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Borrowers;
