"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Server,
  Monitor,
  Code2,
  Database,
  Cpu,
  Code,
  GitBranch,
  ShieldCheck,
  GitCommit,
  GitPullRequest,
  Terminal,
  Brain,
  DatabaseZap,
} from "lucide-react";

type SkillCategory = {
  name: string;
  skills: {
    name: string;
    icon?: React.ReactNode;
  }[];
  icon: React.ReactNode;
};

export function SkillsDropdown() {
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({
    Backend: false,
    Frontend: false,
    Otros: false,
  });

  const categories: SkillCategory[] = [
    {
      name: "Backend",
      icon: <Server className="h-4 w-4" />,
      skills: [
        { name: "Laravel", icon: <Code2 className="h-3.5 w-3.5" /> },
        { name: "PHP", icon: <Code2 className="h-3.5 w-3.5" /> },
        { name: "Python", icon: <Terminal className="h-3.5 w-3.5" /> },
        { name: "MySQL", icon: <Database className="h-3.5 w-3.5" /> },
        { name: "PostgreSQL", icon: <Database className="h-3.5 w-3.5" /> },
      ],
    },
    {
      name: "Frontend",
      icon: <Monitor className="h-4 w-4" />,
      skills: [
        { name: "JavaScript", icon: <Code className="h-3.5 w-3.5" /> },
        { name: "React", icon: <Cpu className="h-3.5 w-3.5" /> },
        { name: "Tailwind CSS", icon: <Code2 className="h-3.5 w-3.5" /> },
        { name: "CSS", icon: <Code2 className="h-3.5 w-3.5" /> },
      ],
    },
    {
      name: "Otros",
      icon: <Brain className="h-4 w-4" />,
      skills: [
        { name: "APIs REST", icon: <GitPullRequest className="h-3.5 w-3.5" /> },
        { name: "Git", icon: <GitBranch className="h-3.5 w-3.5" /> },
        { name: "SOLID", icon: <ShieldCheck className="h-3.5 w-3.5" /> },
        { name: "Agile/Scrum", icon: <GitCommit className="h-3.5 w-3.5" /> },
        { name: "Pentaho", icon: <DatabaseZap className="h-3.5 w-3.5" /> },
      ],
    },
  ];

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div
              className={`group rounded-lg border border-border p-4 transition-all hover:border-primary/30 cursor-pointer ${
                expandedCategories[category.name]
                  ? "bg-muted/30"
                  : "bg-background hover:bg-muted/10"
              }`}
              onClick={() => toggleCategory(category.name)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-muted-foreground">{category.icon}</span>
                  <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </div>
                {expandedCategories[category.name] ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                )}
              </div>

              <AnimatePresence mode="wait">
                {expandedCategories[category.name] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      marginTop: "1rem",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      marginTop: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                      height: { duration: 0.3 },
                      opacity: { duration: 0.2 },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge
                            variant="outline"
                            className="h-7 px-2 py-1 text-xs font-normal hover:bg-primary/5 hover:text-primary transition-colors flex items-center gap-1.5"
                          >
                            {skill.icon}
                            <span>{skill.name}</span>
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
