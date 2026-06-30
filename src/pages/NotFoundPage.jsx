import { Link } from "react-router-dom";

export function NotFoundPage() {
  return <main className="page empty-state shell"><p className="eyebrow">404 · Lost address</p><h1>This page isn’t part of our collection.</h1><Link className="button button--primary" to="/">Return home</Link></main>;
}
