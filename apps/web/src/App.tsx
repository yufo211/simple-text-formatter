import type { Process } from "@simple-text-formatter/core";
import { formatText } from "@simple-text-formatter/core";
import { useMemo, useState } from "react";
import InputArea from "@/components/InputArea";
import { ModeToggle } from "@/components/mode-toggle";
import OutputArea from "@/components/OutputArea";
import ProcessConfigArea from "@/components/ProcessConfigArea";
import { ThemeProvider } from "@/components/theme-provider";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [processes, setProcesses] = useState<Process[]>([]);
  const convertedText = useMemo(() => {
    const config = {
      schemaVersion: 1 as const,
      processes: processes,
    };
    return formatText(inputText, config);
  }, [inputText, processes]);

  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <div className="flex flex-col h-screen min-h-fit">
        <header className="flex flex-row items-center justify-between h-14 shrink-0 px-2 md:px-6 border-b border-border">
          <div></div>
          <div>
            <ModeToggle />
          </div>
        </header>
        <main className="flex-1 min-h-0">
          <ResizablePanelGroup orientation="vertical">
            <ResizablePanel minSize={20} className="px-2 md:px-6 py-1 my-2">
              <InputArea inputText={inputText} setInputText={setInputText} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel minSize={20} className="px-2 md:px-6 py-1 my-2">
              <ProcessConfigArea
                processes={processes}
                setProcesses={setProcesses}
              />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel minSize={20} className="px-2 md:px-6 py-1 my-2">
              <OutputArea convertedText={convertedText} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
