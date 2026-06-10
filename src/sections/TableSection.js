import React from 'react';

// Covers:
//   - axe `table-fake-caption` (1.3.1)
//   - axe `td-headers-attr` (1.3.1)
//   - axe `th-has-data-cells` (1.3.1)
//   - axe `scope-attr-valid` (1.3.1)
//   - axe `empty-table-header` (1.3.1)
export function TableSection() {
  return (
    <section aria-labelledby="table-heading">
      <h2 id="table-heading">Tables</h2>

      {/* Fake caption — first row used as caption instead of <caption> */}
      <table style={{ borderCollapse: 'collapse', border: '1px solid #888' }}>
        <tr>
          <td colSpan="2" style={{ fontWeight: 'bold' }}>Quarterly Results</td>
        </tr>
        <tr>
          <th style={{ border: '1px solid #888', padding: '4px' }}>Quarter</th>
          <th style={{ border: '1px solid #888', padding: '4px' }}>Revenue</th>
        </tr>
        <tr>
          <td style={{ border: '1px solid #888', padding: '4px' }}>Q1</td>
          <td style={{ border: '1px solid #888', padding: '4px' }}>$1M</td>
        </tr>
      </table>

      {/* Empty table header */}
      <table style={{ marginTop: '12px', borderCollapse: 'collapse', border: '1px solid #888' }}>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #888', padding: '4px' }}>A</td>
            <td style={{ border: '1px solid #888', padding: '4px' }}>B</td>
          </tr>
        </tbody>
      </table>

      {/* Invalid scope — axe scope-attr-valid */}
      <table style={{ marginTop: '12px', borderCollapse: 'collapse', border: '1px solid #888' }}>
        <thead>
          <tr>
            <th scope="banana">Wrong scope</th>
            <th>OK</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #888', padding: '4px' }}>1</td>
            <td style={{ border: '1px solid #888', padding: '4px' }}>2</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
