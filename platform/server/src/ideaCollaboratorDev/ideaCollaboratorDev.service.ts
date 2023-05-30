import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IdeaCollaboratorDevServiceBase } from "./base/ideaCollaboratorDev.service.base";

@Injectable()
export class IdeaCollaboratorDevService extends IdeaCollaboratorDevServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
