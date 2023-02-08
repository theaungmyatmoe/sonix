import { Button, Field } from "ui";

export default function Web() {
  return (
    <main className="grid content-center justify-center h-screen px-8">
      <div className="flex flex-col mb-6 gap-y-2">
        <h1 className="text-4xl font-bold text-zinc-800">
          Subscribe to our newsletter
        </h1>
        <p className="text-sm text-zinc-600">
          Subscribe to our newsletter, we will send you the latest news and
          updates.
        </p>
      </div>
      <div className="mb-4">
        <Field>
          <Field.Label>Email</Field.Label>
          <Field.Input type="text" />
        </Field>
      </div>
      <div className="mb-4">
        <Field>
          <Field.Label>Message</Field.Label>
          <Field.TextArea />
        </Field>
      </div>
      <div className="mb-4">
        <Button variant="primary" block="true">
          Subscribe
        </Button>
      </div>
    </main>
  );
}
