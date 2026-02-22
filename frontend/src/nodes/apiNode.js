import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const APINode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="API"
      handles={[
        { type: "target", position: Position.Left, id: "request" },
        { type: "source", position: Position.Right, id: "response" }
      ]}
    >
      <span>Makes API request</span>
    </BaseNode>
  );
};