within ModelicaByExample;
package Subsystems "Examples of subsystems"
  annotation(
    Documentation(info="<html>
<p>
This package contains examples of various subsystems that can be used in Modelica models.
Each subsystem demonstrates different modeling techniques and approaches.
</p>

<h2>Examples</h2>

<ul>
<li><a href=\"#mechanical\">Mechanical Subsystems</a></li>
<li><a href=\"#electrical\">Electrical Subsystems</a></li>
<li><a href=\"#thermal\">Thermal Subsystems</a></li>
</ul>

<h3 id=\"mechanical\">Mechanical Subsystems</h3>

<div style=\"background-color: #f0f0f0; padding: 10px; border-radius: 5px; margin: 10px 0;\">
  <h4>Spring-Mass-Damper System</h4>
  <p>This example demonstrates a simple mechanical system with a spring, mass, and damper.</p>
  <img src=\"spring_mass_damper.png\" alt=\"Spring-Mass-Damper Diagram\" style=\"width: 100%; max-width: 400px;\">
</div>

<h3 id=\"electrical\">Electrical Subsystems</h3>

<div style=\"background-color: #e6f7ff; padding: 10px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #1890ff;\">
  <h4>RC Circuit</h4>
  <p>This example shows a simple resistor-capacitor circuit with a voltage source.</p>
  <table style=\"width: 100%; border-collapse: collapse;\">
    <tr>
      <th style=\"border: 1px solid #ddd; padding: 8px;\">Component</th>
      <th style=\"border: 1px solid #ddd; padding: 8px;\">Value</th>
    </tr>
    <tr>
      <td style=\"border: 1px solid #ddd; padding: 8px;\">Resistor</td>
      <td style=\"border: 1px solid #ddd; padding: 8px;\">1 kΩ</td>
    </tr>
    <tr>
      <td style=\"border: 1px solid #ddd; padding: 8px;\">Capacitor</td>
      <td style=\"border: 1px solid #ddd; padding: 8px;\">100 μF</td>
    </tr>
  </table>
</div>

<h3 id=\"thermal\">Thermal Subsystems</h3>

<div style=\"background-color: #fffbe6; padding: 10px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #faad14;\">
  <h4>Heat Transfer Model</h4>
  <p>This example demonstrates heat transfer through conduction and convection.</p>
  <form style=\"margin-top: 10px;\">
    <div style=\"margin-bottom: 10px;\">
      <label for=\"material\" style=\"display: block; margin-bottom: 5px;\">Material:</label>
      <select id=\"material\" style=\"width: 100%; padding: 5px;\">
        <option value=\"aluminum\">Aluminum</option>
        <option value=\"copper\">Copper</option>
        <option value=\"steel\">Steel</option>
      </select>
    </div>
    <div style=\"margin-bottom: 10px;\">
      <label for=\"temperature\" style=\"display: block; margin-bottom: 5px;\">Temperature (°C):</label>
      <input type=\"number\" id=\"temperature\" value=\"25\" style=\"width: 100%; padding: 5px;\">
    </div>
    <button type=\"button\" style=\"background-color: #faad14; color: white; border: none; padding: 8px 12px; border-radius: 3px; cursor: pointer;\">Calculate</button>
  </form>
</div>

<script>
// This script demonstrates interactive elements in the documentation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Modelica documentation loaded');
    
    // Add click handlers to all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Button clicked: ' + this.textContent);
        });
    });
});
</script>

</html>"));
end Subsystems;