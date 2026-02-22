import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Filter"
      handles={[
        { type: "target", position: Position.Left, id: "input" },
        { type: "source", position: Position.Right, id: "filtered" }
      ]}
    >
      <span>Filters data</span>
    </BaseNode>
  );
};