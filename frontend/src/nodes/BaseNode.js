import { Handle } from 'reactflow';

export const BaseNode = ({ id, title, children, handles, width = 200 }) => {
  return (
    <div style={{
      width: width,
      minHeight: 80,
      border: '1px solid black',
      borderRadius: 8,
      padding: 10,
      background: "white"
    }}>

      {/* Title */}
      <div style={{ fontWeight: "bold", marginBottom: 8 }}>
        {title}
      </div>

      {/* Custom Content */}
      <div>
        {children}
      </div>

      {/* Dynamic Handles */}
      {handles && handles.map((handle, index) => (
        <Handle
        key={index}
        type={handle.type}
         position={handle.position}
        id={`${id}-${handle.id}`}
        style={handle.style}
        />
      ))}

    </div>
  );
};