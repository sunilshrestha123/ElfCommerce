import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import ToggleButton from 'react-toggle-button';
import { fetchCustomers } from '../actions';
import { CustomerListItem } from '../components';

class CustomerList extends Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchCustomers());
  }
  render() {
    const { customers } = this.props;
    return (
      <div className="content-body">
        <h3>
          <FormattedMessage id="sys.customers" />
        </h3>
        <Row>
          <Col md={12}>
            <Table condensed responsive style={{ backgroundColor: '#fff' }}>
              <thead>
                <tr>
                  <th>
                    <FormattedMessage id="sys.name" />
                  </th>
                  <th>
                    <FormattedMessage id="sys.email" />
                  </th>
                  <th>
                    <FormattedMessage id="sys.contactNo" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {
                  customers.map(customer => {
                    return (
                      <CustomerListItem 
                        name={customer.number}
                        email={customer.email}
                        contact={customer.contact}
                      />
                    );
                  })
                }
              </tbody>
            </Table>
            <Pagination aria-label="Page navigation example">
              <PaginationItem disabled>
                <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customers: state.customerReducer.customers,
});

export default connect(mapStateToProps, null)(CustomerList);