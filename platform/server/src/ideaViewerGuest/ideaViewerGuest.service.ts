import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IdeaViewerGuestServiceBase } from "./base/ideaViewerGuest.service.base";

@Injectable()
export class IdeaViewerGuestService extends IdeaViewerGuestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
