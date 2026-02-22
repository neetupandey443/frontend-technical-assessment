import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const ImageNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Image"
      handles={[
        { type: "target", position: Position.Left, id: "input" },
        { type: "source", position: Position.Right, id: "output" }
      ]}
    >
      <span>Processes image</span>
    </BaseNode>
  );
};