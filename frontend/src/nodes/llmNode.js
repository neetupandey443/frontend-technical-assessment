// llmNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode
      id={id}
      title="LLM"
      handles={[
        { type: "target", position: Position.Left, id: "system" },
        { type: "target", position: Position.Left, id: "prompt" },
        { type: "source", position: Position.Right, id: "response" }
      ]}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};