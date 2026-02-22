import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);

  // Extract variables like {{variable}}
  useEffect(() => {
    const matches = currText.match(/{{(.*?)}}/g) || [];

    const cleaned = matches.map(v =>
      v.replace("{{", "").replace("}}", "").trim()
    );

    const uniqueVars = [...new Set(cleaned)];

    setVariables(uniqueVars);
  }, [currText]);

  return (
    <div style={{
      minWidth: 250,
      minHeight: 100,
      border: '1px solid black',
      padding: 10,
      borderRadius: 8
    }}>
      <div>
        <strong>Text</strong>
      </div>

      <div>
        <textarea
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          style={{
            width: '100%',
            minHeight: 60,
            resize: 'vertical'
          }}
        />
      </div>

      {/* Dynamic input handles */}
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: 40 + index * 30 }}
        />
      ))}

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
};