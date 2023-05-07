<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:5dda8fb0-8c78-4ed5-8c46-0eb8c112a60a(import_from_json.properties.instance)">
  <persistence version="9" />
  <languages>
    <use id="28832bdf-0e25-363c-b286-c7457d9f9c90" name="io.lionweb.Properties" version="1" />
  </languages>
  <imports />
  <registry>
    <language id="28832bdf-0e25-363c-b286-c7457d9f9c90" name="io.lionweb.Properties">
      <concept id="-5251757909129240856" name="io.lionweb.Properties.structure.IntValue" flags="ng" index="37HND">
        <property id="-1164810965792278352" name="value" index="3QFnCD" />
      </concept>
      <concept id="3610585688048632058" name="io.lionweb.Properties.structure.BooleanValue" flags="ng" index="259e1R" />
      <concept id="9045300450722131192" name="io.lionweb.Properties.structure.Property" flags="ng" index="26vB0H">
        <property id="987908001351304881" name="name" index="3uY$uA" />
        <child id="-4949124439403577779" name="value" index="3Vt1f6" />
      </concept>
      <concept id="4516078350026690430" name="io.lionweb.Properties.structure.PropertiesFile" flags="ng" index="Tw1CF">
        <child id="-3883340165466824873" name="props" index="1Pj4nA" />
      </concept>
      <concept id="-8690975471803852252" name="io.lionweb.Properties.structure.DecValue" flags="ng" index="1G7eBY">
        <property id="3857521133551189989" name="value" index="1rqtjH" />
      </concept>
      <concept id="-8119058232078444791" name="io.lionweb.Properties.structure.StringValue" flags="ng" index="1T4Ty4">
        <property id="-5457643573714526488" name="value" index="1ijX3X" />
      </concept>
    </language>
  </registry>
  <node concept="Tw1CF" id="~file_properties-parser-examples-example1-props-">
    <node concept="26vB0H" id="~file_properties-parser-examples-example1-props--props0" role="1Pj4nA">
      <property role="3uY$uA" value="a" />
      <node concept="37HND" id="~file_properties-parser-examples-example1-props--props0-value0" role="3Vt1f6">
        <property role="3QFnCD" value="12323" />
      </node>
    </node>
    <node concept="26vB0H" id="~file_properties-parser-examples-example1-props--props1" role="1Pj4nA">
      <property role="3uY$uA" value="b" />
      <node concept="259e1R" id="~file_properties-parser-examples-example1-props--props1-value0" role="3Vt1f6" />
    </node>
    <node concept="26vB0H" id="~file_properties-parser-examples-example1-props--props2" role="1Pj4nA">
      <property role="3uY$uA" value="c" />
      <node concept="1T4Ty4" id="~file_properties-parser-examples-example1-props--props2-value0" role="3Vt1f6">
        <property role="1ijX3X" value="foo" />
      </node>
    </node>
    <node concept="26vB0H" id="4OO9PkkNMva" role="1Pj4nA">
      <property role="3uY$uA" value="asdfa" />
      <node concept="1G7eBY" id="4OO9PkkNMvm" role="3Vt1f6">
        <property role="1rqtjH" value="314012.123" />
      </node>
    </node>
  </node>
</model>
