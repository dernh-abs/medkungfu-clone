// Studio page editor — renders the PuckEditor client component for the
// selected page. The page param selects which UCD page to edit.

import { PuckEditor } from "../components/PuckEditor";

interface PageProps {
  params: Promise<{ page: string }>;
}

export default async function StudioPageEditor({ params }: PageProps) {
  const { page } = await params;
  return <PuckEditor page={page} />;
}
