// Studio page editor — renders the StudioEditor client component for the
// selected page. The page param selects which UCD page to edit.

import { StudioEditor } from "../components/StudioEditor";

interface PageProps {
  params: Promise<{ page: string }>;
}

export default async function StudioPageEditor({ params }: PageProps) {
  const { page } = await params;
  return <StudioEditor page={page} />;
}
