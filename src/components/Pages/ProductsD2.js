
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  TabContent, TabPane, Nav,
  NavItem, NavLink, Row, Col
} from 'reactstrap';
import classnames from 'classnames';

const ProductsD2 = () => {

  // State for current active Tab
  const [currentActiveTab, setCurrentActiveTab] = useState('1');

  // Toggle active state for Tab
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  }

  return (
    <div style={{
      display: 'block', width: 550, padding: 30
    }}>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({
              active:
                currentActiveTab === '1'
            })}
            onClick={() => { toggle('1'); }}
          >
            Details
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active:
                currentActiveTab === '2'
            })}
            onClick={() => { toggle('2'); }}
          >
            Ingredients
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active:
                currentActiveTab === '3'
            })}
            onClick={() => { toggle('3'); }}
          >
            How To Use
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={currentActiveTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12" >
              <h5 className='bg-light p-2'>Intense moisture helps soothe seriously dry hands—leaving them noticeably softer and smoother. Andiroba oil and other plant hydrators help infuse skin with nourishment for moisturized, soft hands. <br />
                • intensely moisturizes <br />
                • softens and smooths dry hands <br />
                • 95% naturally derived</h5>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <h5 className='bg-light p-2'>ngredients: Aqueous (Water\Aqua\Eau) Extracts\Extraits Aqueux:Echinacea Purpurea (Coneflower) Extract, Aloe Barbadensis Leaf Juice , Cetearyl Alcohol , Glycerin , Limnanthes Alba (Meadowfoam) Seed Oil , Caprylic/Capric Triglyceride , Dimethicone , Glyceryl Stearate , Polyglyceryl-6 Dioleate , Coco-Caprylate/Caprate , Lactic Acid , PEG-100 Stearate , Glycyrrhiza Glabra (Licorice) Root Extract , Tocopherol , Helianthus Annuus (Sunflower) Seed Oil , Methyl Glucose Dioleate , Methyl Glucose Sesquistearate , Carapa Guaianensis (Andiroba) Seed Oil , Caprylyl Glycol , Xanthan Gum , Maltodextrin , Magnesium Sulfate , Sodium Hydroxide , Fragrance (Parfum) , Linalool , Citral , Limonene , Potassium Sorbate , Phenoxyethanol</h5>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <h5 className='bg-light p-2'>Apply liberally to clean hands and massage in. Reapply as needed.</h5>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div >
  );
}

export default ProductsD2;