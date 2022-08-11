export interface MindMapNode {
  id: string;
  name: string;
  topic?: string;
  route?: string;
  root?: boolean;
  expanded?: boolean;
  direction?: 0 | 1;
  style?: { fontSize: string; color: string; background: string };
  tags?: string[];
  icons?: string[];
  hyperLink?: string;
  children?: MindMapNode[];
}
