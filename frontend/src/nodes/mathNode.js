import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Math"
      handles={[
        { type: "target", position: Position.Left, id: "a" },
        { type: "target", position: Position.Left, id: "b" },
        { type: "source", position: Position.Right, id: "result" }
      ]}
    >
      <span>Performs addition</span>
    </BaseNode>
  );
};