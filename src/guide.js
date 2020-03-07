import React from "react";

export class GTab extends React.Component {
  render() {
    const gtab = (
      <table>
        <thead>
          <tr>
            <th>Mask</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>YYYY</code>
            </td>
            <td>4-digits year</td>
            <td>
              <code>1984</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>YY</code>
            </td>
            <td>2-digits year</td>
            <td>
              <code>84</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>MMMM</code>
            </td>
            <td>Month name</td>
            <td>
              <code>January</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>MMM</code>
            </td>
            <td>Short month name</td>
            <td>
              <code>Jan</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>DD</code>
            </td>
            <td>2-digits day</td>
            <td>
              <code>17</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>dddd</code>
            </td>
            <td>Day of the week</td>
            <td>
              <code>Tuesday</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>ddd</code>
            </td>
            <td>Short day of the week</td>
            <td>
              <code>Tue</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>A</code>
            </td>
            <td>Day period</td>
            <td>
              <code>AM</code>, <code>PM</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>a</code>
            </td>
            <td>Lowercased day period</td>
            <td>
              <code>am</code>, <code>pm</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>HH</code>
            </td>
            <td>24-hours hour</td>
            <td>
              <code>16</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>hh</code>
            </td>
            <td>12-hours hour</td>
            <td>
              <code>04</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>mm</code>
            </td>
            <td>2-digit minute</td>
            <td>
              <code>13</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>ss</code>
            </td>
            <td>2-digit second</td>
            <td>
              <code>37</code>
            </td>
          </tr>
        </tbody>
      </table>
    );
    return gtab;
  }
}
