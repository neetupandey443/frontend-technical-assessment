import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Logger"
      handles={[
        { type: "target", position: Position.Left, id: "logInput" }
      ]}
    >
      <span>Logs data</span>
    </BaseNode>
  );
};