import { useState } from "react";
import { toast } from "react-hot-toast";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Alert,
    AlertDescription,
    AlertTitle,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Badge,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Checkbox,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Input,
    Label,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Progress,
    RadioGroup,
    RadioGroupItem,
    Switch,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Textarea,
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "../../../../shared/client/components/ui";
import { ThemeSetting, useTheme } from "../../../../shared/client/hooks/useTheme";

export function Home() {
  const [switchOn, setSwitchOn] = useState(false);
  const t = useTheme();

  return (
    <div className={"p-6 flex flex-col gap-10"}>
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Wasp Sensible Starter!</CardTitle>
        </CardHeader>
        <CardContent className={"flex flex-col gap-4"}>
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
            <div className={"flex flex-col gap-2"}>
              <Label htmlFor={"name"}>{"Name"}</Label>
              <Input id={"name"} placeholder={"Your name"} />
            </div>
            <div className={"flex flex-col gap-2"}>
              <Label htmlFor={"email"}>{"Email"}</Label>
              <Input
                id={"email"}
                placeholder={"you@example.com"}
                type={"email"}
              />
            </div>
          </div>

          <div className={"flex flex-col gap-2"}>
            <Label htmlFor={"bio"}>{"Bio"}</Label>
            <Textarea
              id={"bio"}
              placeholder={"Tell us a bit about yourself..."}
            />
          </div>

          <div className={"flex items-center gap-2"}>
            <Switch
              checked={switchOn}
              onCheckedChange={setSwitchOn}
              id={"updates"}
            />
            <Label htmlFor={"updates"}>Switch :)</Label>
          </div>

          <div className={"flex items-center gap-4"}>
            <Checkbox id={"terms"} />
            <Label htmlFor={"terms"}>Checkbox :)</Label>
          </div>

          <RadioGroup
            className={"flex gap-4"}
            value={t.themeSetting}
            onValueChange={(v: ThemeSetting) => t.setTheme(v)}>
            <div className={"flex items-center gap-2"}>
              <RadioGroupItem value={"light"} id={"r1"} />
              <Label htmlFor={"r1"}>Light</Label>
            </div>
            <div className={"flex items-center gap-2"}>
              <RadioGroupItem value={"dark"} id={"r2"} />
              <Label htmlFor={"r2"}>Dark</Label>
            </div>
            <div className={"flex items-center gap-2"}>
              <RadioGroupItem value={"system"} id={"r3"} />
              <Label htmlFor={"r3"}>System</Label>
            </div>
          </RadioGroup>

          <div className={"flex gap-2 flex-wrap"}>
            <Button>Default</Button>
            <Button variant={"outline"}>Outline</Button>
            <Button variant={"secondary"}>Secondary</Button>
            <Button variant={"destructive"}>Delete</Button>
            <Button
              onClick={() =>
                toast.promise(
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve("Success!");
                    }, 1000);
                  }),
                  {
                    loading: "Preparing toast...",
                    success: "Toast!",
                    error: "Error!",
                  }
                )
              }>
              Show Toast
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue={"account"} className={"w-full"}>
        <TabsList>
          <TabsTrigger value={"account"}>Account</TabsTrigger>
          <TabsTrigger value={"settings"}>Settings</TabsTrigger>
        </TabsList>
        <TabsContent value={"account"}>
          <Card>
            <CardHeader>
              <CardTitle>Account Info</CardTitle>
            </CardHeader>
            <CardContent>Your account details go here.</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value={"settings"}>
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>Your settings go here.</CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Accordion type={"single"} collapsible className={"w-full"}>
        <AccordionItem value={"item-1"}>
          <AccordionTrigger>What is this?</AccordionTrigger>
          <AccordionContent>
            This is a starter demo using ShadCN components.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"}>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a modal dialog using ShadCN.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className={"flex gap-4 items-center"}>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"}>Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>Here is a popover!</PopoverContent>
        </Popover>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"secondary"}>Hover Me</Button>
          </TooltipTrigger>
          <TooltipContent>I am a tooltip!</TooltipContent>
        </Tooltip>
      </div>

      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>This is an alert — check it out!</AlertDescription>
      </Alert>

      <div className={"flex items-center gap-4"}>
        <Badge>New</Badge>
        <Badge variant={"secondary"}>Beta</Badge>
        <Badge variant={"outline"}>Verified</Badge>
        <Badge variant={"destructive"}>Error</Badge>
      </div>

      <div className={"flex items-center gap-4"}>
        <Avatar>
          <AvatarImage
            src={"https://github.com/zkmrtn8.png"}
            alt={`zkmrtn8's avatar`}
          />
          <AvatarFallback>ZM</AvatarFallback>
        </Avatar>
        <div className={"w-full max-w-[300px]"}>
          <Label>Progress</Label>
          <Progress value={65} />
        </div>
      </div>
    </div>
  );
}
