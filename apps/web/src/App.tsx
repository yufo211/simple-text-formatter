import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function App() {
  return (
    <div className="flex flex-col h-screen min-h-96">
      <header className="h-14 shrink-0 px-6 border-b border-border">aaa</header>
      <main className="flex-1 min-h-0">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel>One</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>Two</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>Three</ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  );
}

export default App;
