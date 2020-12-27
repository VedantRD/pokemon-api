import React, { Component } from 'react'

import MaterialTable from 'material-table'

class Demo extends Component {






  render() {
    return (
                  <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'col1', field: 'name' },
            { title: 'col2', field: 'surname' },
            { title: 'col3 ', field: 'birthYear', type: 'numeric' },
            { title: 'col4 ', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
          ]}
          data={[
              { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
          title="Demo Title"
        />
      </div>






    )
  }
}
export default Demo

