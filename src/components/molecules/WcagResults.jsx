import { useContext } from "react";
export default function WcagResults() {
  const { contrast } = useContext(ColorContext);

  const [aaNormal, aaLarge, aaaNormal, aaaLarge] = getWcagRatings(contrast);

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Normal Text</th>
          <th>
            <Tooltip content={<p>Text of ≥18pt or ≥14pt if bold</p>} placement="bottom" trigger="mouseenter focusin">
              <p tabIndex="0">Large Text</p>
            </Tooltip>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AA</td>
          <td>
            <Rating pass={aaNormal} />
          </td>
          <td>
            <Rating pass={aaLarge} />
          </td>
        </tr>
        <tr>
          <td>AAA</td>
          <td>
            <Rating pass={aaaNormal} />
          </td>
          <td>
            <Rating pass={aaaLarge} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
