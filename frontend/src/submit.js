import { useStore } from "./store";

export const SubmitButton = () => {

    const { nodes, edges } = useStore();

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nodes,
                    edges,
                }),
            });

            const data = await response.json();

            alert(`Parsed Successfully!
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag}`);

        } catch (error) {
            console.error("Error:", error);
            alert("Error connecting to backend");
        }
    };

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};