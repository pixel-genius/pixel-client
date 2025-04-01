import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { TabProvider } from "@repo/ui/components/tabs/tab-provider";
import { TabList } from "@repo/ui/components/tabs/tab-list";
import { TabTrigger } from "@repo/ui/components/tabs/tab-trigger";
import { TabContent } from "@repo/ui/components/tabs/tab-content";

const meta: Meta<typeof TabProvider> = {
  title: "Components/Tabs",
  component: TabProvider,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text", defaultValue: "example-tabs" },
    variant: {
      control: { type: "select" },
      options: ["fill", "outline"],
      defaultValue: "fill",
    },
    defaultValue: { control: "text", defaultValue: "General" },
    hiddenMode: {
      control: { type: "select" },
      options: ["unmount", "hidden"],
      defaultValue: "hidden",
    },
  },
  parameters: {
    controls: { expanded: true },
    description:
      "Tab components allow users to switch between related sections of content.",
  },
};

export default meta;

// ------------------------
// 1. Hidden Mode Demo
// ------------------------

export const HiddenModeDemo: StoryObj<typeof TabProvider> = {
  name: "Hidden Mode (Unmount)",
  args: {
    id: "hidden-mode-demo",
    variant: "fill",
    defaultValue: "General",
    hiddenMode: "unmount",
  },
  parameters: {
    docs: {
      description: {
        story:
          "`hiddenMode='unmount'` removes inactive tab content from the DOM. Useful when you want to reset internal state or unmount components completely.",
      },
    },
  },
  render: (args) => (
    <TabProvider {...args}>
      <TabList>
        <TabTrigger value="General">General</TabTrigger>
        <TabTrigger value="Images">Images</TabTrigger>
        <TabTrigger value="File">File</TabTrigger>
        <TabTrigger value="Admin Chat">Admin Chat</TabTrigger>
      </TabList>

      <TabContent value="General">
        <p className="text-sm text-muted-foreground">
          General settings content.
        </p>
      </TabContent>
      <TabContent value="Images">
        <p className="text-sm text-muted-foreground">Image upload section.</p>
      </TabContent>
      <TabContent value="File">
        <p className="text-sm text-muted-foreground">
          File upload and attachments.
        </p>
      </TabContent>
      <TabContent value="Admin Chat">
        <p className="text-sm text-muted-foreground">
          Admin messages and communication.
        </p>
      </TabContent>
    </TabProvider>
  ),
};

// ------------------------
// 2. Fill Variant
// ------------------------

export const FillVariant: StoryObj<typeof TabProvider> = {
  name: "Fill Variant",
  args: {
    id: "fill-tabs",
    variant: "fill",
    defaultValue: "overview",
    hiddenMode: "css",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The `fill` variant applies solid background styling. All tabs in this group use `TabProvider` to share state and styling.",
      },
    },
  },
  render: (args) => (
    <TabProvider {...args}>
      <TabList>
        <TabTrigger value="overview">Overview</TabTrigger>
        <TabTrigger value="security">Security</TabTrigger>
        <TabTrigger value="billing">Billing</TabTrigger>
        <TabTrigger value="setting">User Settings</TabTrigger>
      </TabList>

      <TabContent value="overview">
        <p className="text-sm text-muted-foreground">Your account overview.</p>
      </TabContent>
      <TabContent value="security">
        <p className="text-sm text-muted-foreground">Security options here.</p>
      </TabContent>
      <TabContent value="billing">
        <p className="text-sm text-muted-foreground">
          Billing info and history.
        </p>
      </TabContent>
      <TabContent value="setting">
        <p className="text-sm text-muted-foreground">User account settings.</p>
      </TabContent>
    </TabProvider>
  ),
};

// ------------------------
// 3. Outline Variant
// ------------------------

export const OutlineVariant: StoryObj<typeof TabProvider> = {
  name: "Outline Variant",
  args: {
    id: "outline-tabs",
    variant: "outline",
    defaultValue: "overview",
    hiddenMode: "unmount",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The `outline` variant uses bordered tab styling. Uses `TabProvider` for grouping and control.",
      },
    },
  },
  render: (args) => (
    <TabProvider {...args}>
      <TabList>
        <TabTrigger value="overview">Overview</TabTrigger>
        <TabTrigger value="security">Security</TabTrigger>
        <TabTrigger value="billing">Billing</TabTrigger>
      </TabList>

      <TabContent value="overview">
        <p className="text-sm text-muted-foreground">Overview content.</p>
      </TabContent>
      <TabContent value="security">
        <p className="text-sm text-muted-foreground">Security info.</p>
      </TabContent>
      <TabContent value="billing">
        <p className="text-sm text-muted-foreground">Billing section.</p>
      </TabContent>
    </TabProvider>
  ),
};

// ------------------------
// 4. Multiple Tab Groups
// ------------------------

export const MultipleTabGroups: StoryObj = {
  name: "Multiple Tab Groups on Page",
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates two independent `TabProvider` instances. Each group has separate state, variant, and tab ID.",
      },
    },
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="font-semibold mb-2">Account Tabs</h4>
        <TabProvider id="account-tabs" variant="fill" defaultValue="overview">
          <TabList>
            <TabTrigger value="overview">Overview</TabTrigger>
            <TabTrigger value="security">Security</TabTrigger>
          </TabList>
          <TabContent value="overview">
            <p className="text-sm text-muted-foreground">
              Account overview with recent usage.
            </p>
          </TabContent>
          <TabContent value="security">
            <p className="text-sm text-muted-foreground">
              Adjust your 2FA and account protection options.
            </p>
          </TabContent>
        </TabProvider>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Profile Tabs</h4>
        <TabProvider id="profile-tabs" variant="outline" defaultValue="info">
          <TabList>
            <TabTrigger value="info">Profile Info</TabTrigger>
            <TabTrigger value="activity">Activity</TabTrigger>
          </TabList>
          <TabContent value="info">
            <p className="text-sm text-muted-foreground">
              Change your name, email, and upload an avatar.
            </p>
          </TabContent>
          <TabContent value="activity">
            <p className="text-sm text-muted-foreground">
              Check your login history and app activity.
            </p>
          </TabContent>
        </TabProvider>
      </div>
    </div>
  ),
};
