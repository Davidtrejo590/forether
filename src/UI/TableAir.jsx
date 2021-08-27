import { Component } from 'react';

class TableAir extends Component {
  render() {
    this.props.data ? console.log(this.props.data.current) : console.log()
    return (
      this.props.data ?
        <div className="table-responsive">
          <table class="table table-striped table-hover table-bordered ">
            <thead class="table-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad [μg/m3]</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
                Object.entries(this.props.data.air_quality).map((data, index) => {
                  console.log(Object.entries(this.props.data.air_quality))
                  return (
                    <tr>
                      <td>
                        <p className="lead">{index + 1}</p>
                      </td>

                      <td>
                        <p><strong>{data[0]}</strong></p>
                      </td>
                      <td>
                        <p><strong>{data[1].toFixed()}</strong></p>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
        :
        <div>

        </div>
    );
  }
}

export default TableAir;